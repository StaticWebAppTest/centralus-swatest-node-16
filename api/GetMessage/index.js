module.exports = async function (context, req) {
  const date = "2022-04-27T11:09:26.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

