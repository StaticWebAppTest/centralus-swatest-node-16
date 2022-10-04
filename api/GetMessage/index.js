module.exports = async function (context, req) {
  const date = "2022-10-04T09:18:10.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

