module.exports = async function (context, req) {
  const date = "2022-09-16T06:00:45.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

