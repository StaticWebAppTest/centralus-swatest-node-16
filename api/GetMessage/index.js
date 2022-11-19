module.exports = async function (context, req) {
  const date = "2022-11-19T13:20:50.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

