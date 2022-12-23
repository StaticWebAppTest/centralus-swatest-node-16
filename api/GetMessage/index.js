module.exports = async function (context, req) {
  const date = "2022-12-23T23:09:13.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

