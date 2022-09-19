module.exports = async function (context, req) {
  const date = "2022-09-19T11:10:30.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

