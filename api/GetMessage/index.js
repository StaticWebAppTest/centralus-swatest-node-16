module.exports = async function (context, req) {
  const date = "2023-09-28T18:11:14.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

