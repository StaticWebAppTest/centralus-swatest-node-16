module.exports = async function (context, req) {
  const date = "2023-07-10T20:10:40.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

