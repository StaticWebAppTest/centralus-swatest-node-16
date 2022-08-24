module.exports = async function (context, req) {
  const date = "2022-08-24T15:11:35.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

