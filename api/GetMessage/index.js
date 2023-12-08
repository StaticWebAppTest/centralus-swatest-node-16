module.exports = async function (context, req) {
  const date = "2023-12-08T11:07:47.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

