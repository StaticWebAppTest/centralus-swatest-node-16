module.exports = async function (context, req) {
  const date = "2022-05-19T06:14:20.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

