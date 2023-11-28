module.exports = async function (context, req) {
  const date = "2023-11-28T04:11:19.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

