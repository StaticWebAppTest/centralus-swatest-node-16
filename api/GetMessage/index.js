module.exports = async function (context, req) {
  const date = "2022-06-23T07:09:53.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

