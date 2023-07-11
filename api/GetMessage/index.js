module.exports = async function (context, req) {
  const date = "2023-07-11T05:09:30.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

