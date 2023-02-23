module.exports = async function (context, req) {
  const date = "2023-02-23T21:09:32.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

