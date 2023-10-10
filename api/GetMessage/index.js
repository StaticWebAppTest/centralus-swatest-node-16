module.exports = async function (context, req) {
  const date = "2023-10-10T08:12:00.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

