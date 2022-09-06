module.exports = async function (context, req) {
  const date = "2022-09-06T06:10:23.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

