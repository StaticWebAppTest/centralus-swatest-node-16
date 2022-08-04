module.exports = async function (context, req) {
  const date = "2022-08-04T09:10:18.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

