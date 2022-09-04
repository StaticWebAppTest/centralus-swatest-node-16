module.exports = async function (context, req) {
  const date = "2022-09-04T17:13:40.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

