module.exports = async function (context, req) {
  const date = "2023-10-16T16:11:30.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

