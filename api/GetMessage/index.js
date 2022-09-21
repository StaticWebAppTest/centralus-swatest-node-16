module.exports = async function (context, req) {
  const date = "2022-09-21T20:13:07.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

