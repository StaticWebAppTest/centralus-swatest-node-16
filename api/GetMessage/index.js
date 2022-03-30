module.exports = async function (context, req) {
  const date = "2022-03-30T09:10:08.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

