module.exports = async function (context, req) {
  const date = "2022-03-16T09:10:03.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

