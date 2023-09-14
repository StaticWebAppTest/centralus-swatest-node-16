module.exports = async function (context, req) {
  const date = "2023-09-14T09:08:50.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

