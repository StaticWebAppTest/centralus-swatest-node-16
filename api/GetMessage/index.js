module.exports = async function (context, req) {
  const date = "2023-10-28T07:07:57.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

