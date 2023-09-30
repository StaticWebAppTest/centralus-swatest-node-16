module.exports = async function (context, req) {
  const date = "2023-09-30T09:07:23.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

