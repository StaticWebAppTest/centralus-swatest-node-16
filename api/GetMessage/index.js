module.exports = async function (context, req) {
  const date = "2022-03-04T20:10:45.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

