module.exports = async function (context, req) {
  const date = "2022-11-23T09:10:18.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

