module.exports = async function (context, req) {
  const date = "2023-10-21T06:10:50.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

