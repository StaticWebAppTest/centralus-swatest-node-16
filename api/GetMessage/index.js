module.exports = async function (context, req) {
  const date = "2022-10-11T17:25:23.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

