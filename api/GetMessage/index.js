module.exports = async function (context, req) {
  const date = "2022-04-13T23:10:17.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

