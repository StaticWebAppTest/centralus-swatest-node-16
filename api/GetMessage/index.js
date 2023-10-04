module.exports = async function (context, req) {
  const date = "2023-10-04T17:08:11.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

