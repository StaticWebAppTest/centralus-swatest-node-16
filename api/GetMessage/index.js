module.exports = async function (context, req) {
  const date = "2023-09-28T21:07:36.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

