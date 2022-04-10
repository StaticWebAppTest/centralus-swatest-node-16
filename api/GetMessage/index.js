module.exports = async function (context, req) {
  const date = "2022-04-10T18:12:25.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

