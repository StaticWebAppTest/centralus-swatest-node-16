module.exports = async function (context, req) {
  const date = "2023-10-26T07:08:14.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

