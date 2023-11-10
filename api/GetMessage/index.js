module.exports = async function (context, req) {
  const date = "2023-11-10T13:11:15.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

