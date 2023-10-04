module.exports = async function (context, req) {
  const date = "2023-10-04T16:11:54.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

