module.exports = async function (context, req) {
  const date = "2023-03-11T07:08:09.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

