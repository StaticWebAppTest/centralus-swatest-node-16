module.exports = async function (context, req) {
  const date = "2024-06-28T07:10:50.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

