module.exports = async function (context, req) {
  const date = "2023-07-03T15:10:03.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

