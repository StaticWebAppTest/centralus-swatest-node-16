module.exports = async function (context, req) {
  const date = "2022-06-11T07:09:40.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

