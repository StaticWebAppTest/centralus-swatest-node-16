module.exports = async function (context, req) {
  const date = "2022-03-12T12:15:23.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

