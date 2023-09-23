module.exports = async function (context, req) {
  const date = "2023-09-23T10:08:07.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

