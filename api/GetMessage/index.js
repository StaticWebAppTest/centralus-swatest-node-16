module.exports = async function (context, req) {
  const date = "2022-11-23T07:09:45.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

