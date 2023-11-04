module.exports = async function (context, req) {
  const date = "2023-11-04T08:10:18.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

