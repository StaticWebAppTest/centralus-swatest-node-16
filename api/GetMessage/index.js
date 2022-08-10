module.exports = async function (context, req) {
  const date = "2022-08-10T11:09:26.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

