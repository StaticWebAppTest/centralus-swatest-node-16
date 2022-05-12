module.exports = async function (context, req) {
  const date = "2022-05-12T20:12:20.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

