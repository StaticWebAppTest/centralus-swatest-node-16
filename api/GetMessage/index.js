module.exports = async function (context, req) {
  const date = "2023-05-11T05:08:30.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

