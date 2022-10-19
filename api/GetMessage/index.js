module.exports = async function (context, req) {
  const date = "2022-10-19T11:14:25.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

