module.exports = async function (context, req) {
  const date = "2022-09-25T11:10:15.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

