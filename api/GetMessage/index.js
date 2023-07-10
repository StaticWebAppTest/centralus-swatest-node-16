module.exports = async function (context, req) {
  const date = "2023-07-10T02:38:23.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

