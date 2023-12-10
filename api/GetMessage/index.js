module.exports = async function (context, req) {
  const date = "2023-12-10T09:08:23.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

