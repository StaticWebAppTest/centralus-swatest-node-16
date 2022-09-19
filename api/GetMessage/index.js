module.exports = async function (context, req) {
  const date = "2022-09-19T06:07:07.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

