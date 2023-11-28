module.exports = async function (context, req) {
  const date = "2023-11-28T09:09:32.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

